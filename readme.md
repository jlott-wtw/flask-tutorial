# Flask App with React

## update nodejs to the latest build

```bash
node -v
```

```bash
choco install nodejs-lts
```
or download the latest from http://nodejs.org

## init your node

```bash
npm init
npm install --save-dev webpack webpack-cli
```

## docker-compose

```bash
docker-compose up --build
```

## docker

```bash
docker build -t flask-tutorial:latest .
docker run -p 5000:5000 flask-tutorial
```
