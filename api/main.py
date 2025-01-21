from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# 허용할 출처 설정
origins = [
    "http://localhost:5173",
    "https://5173-xlilume-smartcookingass-y7vt12wxtpz.ws-us117.gitpod.io",
]

# CORS 미들웨어 추가
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # 허용할 출처
    allow_credentials=True,  # 쿠키/인증 헤더 허용
    allow_methods=["*"],  # 모든 HTTP 메서드 허용
    allow_headers=["*"],  # 모든 헤더 허용
)

@app.get("/api/hello")
async def read_hello():
    return {"message": "Hello from FastAPI!"}
