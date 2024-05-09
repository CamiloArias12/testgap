from typing import List
from pydantic import BaseModel

class DataInput (BaseModel):
    seed_one:int
    seed_two:int
    beta:float
    alfa:float
    gap_level:int
    trust_level:float
    quantity_numbers:int

