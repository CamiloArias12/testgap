from typing import Union
from dto_api import DataInput
from gap_test import main


from fastapi import FastAPI
app = FastAPI()


@app.post("/resolver")
def get_graph(data:DataInput):
    return main(data)

