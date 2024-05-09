from typing import Union
from dto_api import DataInput
from gap_test import main


from fastapi import FastAPI
app = FastAPI()


@app.post("/")
def resolve(data:DataInput):
    return main(data)

@app.get("/")
def get_():
    return {"data":"Hello"}

