import { LAUNCH_APP_URL, APK_DOWNLOAD_URL, ANDROID_STORE_URL, IOS_STORE_URL, DEEP_LINK } from '../constants'

export function launchAppSmart() {
  // 요구사항: 일단은 웹페이지로만 이동 (placeholder)
  window.open(LAUNCH_APP_URL, '_blank')
}

export function downloadAppSmart() {
  // 요구사항: APK 파일 다운로드 링크로 이동 (placeholder)
  // 배포 시 APK를 public/에 두고 파일명을 constants의 APK_DOWNLOAD_URL과 일치시켜주세요.
  window.location.href = APK_DOWNLOAD_URL
}


