from average_product import number_generate
from scipy.stats import chi2


def count_range_alfa_beta(alfa:float,beta:float,list_random):
    list_gap=[]
    for a in list_random:
        if(a>=alfa and a<=beta):
            list_gap.append(1)
        else:
           list_gap.append(0) 
    return list_gap 

def gap_count (list_gap):
    result=[-1]*(len(list_gap))
    count=0
    for i in range(0,len(list_gap)):
        if(i<len(list_gap)-1):
            if(list_gap[i]==1 and list_gap[i+1]==1 and i!=len(list_gap)):
                result[i+1]=0
            if(list_gap[i]==0 and list_gap[i+1]==0 and i!=len(list_gap)):
                count=count+1 
            if(i!=len(list_gap) and list_gap[i]==0 and list_gap[i+1]==1):
                result[i-count]=count+1
                count=0
        else:
            if(count>0 and list_gap[i]==0):
                result[i-(count)]=count+1
            if(count>0 and list_gap[i]==1):
                result[i-(count)]=count
            if(list_gap[i]==0 and list_gap[i-1]==1):
                result[i-(count)]=1

    return result 

def table_generate(size,list_gap,trust_level,beta,alfa):
    ls=beta-alfa
    count_gap=[]
    ei=[]
    ei_final=[]
    for i in range(0,size+1):
        if(size==i):
            count_gap.append(count_size_gap(i,list_gap,False))
        else:
            count_gap.append(count_size_gap(i,list_gap,True))

       
    total_gap=sum(count_gap)

    print(total_gap)
    for i in range(0,size+1):
        if(i<size):
            print("EI",total_gap*ls*pow(1-ls,i))
            ei.append(total_gap*ls*pow(1-ls,i))
        else:
            ei.append(total_gap*pow(1-ls,i))

    for i in range(0,size+1):
        ei_final.append(pow(ei[i]-count_gap[i],2)/ei[i])
    total_ei=sum(ei)
    total_ei_final=sum(ei_final)
    count_gap.append(total_gap)
    ei.append(int(total_ei))
    ei_final.append(total_ei_final)

    return [count_gap,ei,ei_final]



    
def count_size_gap(size,list_gap,equal):
    count=0
    for i in list_gap:
        if(equal):
            if(i==size):
                count=count+1
        else:
            if(i>=size):
                count=count+1
    return count


def main(data):
    list_random=number_generate(data.seed_one,data.seed_two,data.quantity_numbers)
    list_count=count_range_alfa_beta(data.alfa,data.beta,list_random)
    print(list_count)
    list_gap=gap_count(list_count)
    print(list_gap)
    table=table_generate(data.gap_level,list_gap,0.05,data.beta,data.alfa)
    print(len(list_random),len(list_count),len(list_gap))
    
    return {
        "random_list":[list_random,list_count,list_gap],
        "table":table

            }


