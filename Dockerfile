FROM python:3.11

WORKDIR /PMAccelerator

COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

ENV FLASK_APP=app.py

CMD ["python", "app.py"]
