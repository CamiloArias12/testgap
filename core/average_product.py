def number_generate(x:int,y:int,n:int):
    list=[]
    if(len(str(x))>3 and len(str(x))>3):
       seed_x:int=x
       seed_y:int=y
       for x in range(0,n): 
            mult=seed_y*seed_x
            number=0
            length=len(str(mult))
            if(len(str(mult))%2==1 ):
                mult="0"+str(seed_x*seed_y)
                length=len(mult)
            number=find_center_numbers(str(mult))
            seed_x=seed_y
            seed_y=number
            list.append(number/10000)
    return list        


def find_center_numbers(string):
    start_index = (len(string) - 4) // 2
    center_numbers = string[start_index:start_index + 4]
    return int(center_numbers)

