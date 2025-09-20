# Node.js 이미지 사용
FROM node:18-alpine

# 작업 디렉토리 설정
WORKDIR /app

# 패키지 파일 복사
COPY package*.json ./

# 의존성 설치
RUN npm ci

# 소스 코드 복사
COPY . .

# Vite 빌드 실행
RUN npm run build

# serve 패키지 전역 설치 (정적 파일 서빙용)
RUN npm install -g serve

# 포트 노출
EXPOSE 9999

# 빌드된 파일을 serve로 서빙
CMD ["serve", "-s", "dist", "-l", "9999"]