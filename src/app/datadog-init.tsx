'use client'
import { datadogLogs } from '@datadog/browser-logs'
import { datadogRum } from '@datadog/browser-rum'

datadogLogs.init({
  clientToken: process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN as string,
  site: 'us5.datadoghq.com',
  service: 'mq-portfolio',
  env: process.env.NEXT_PUBLIC_ENV || 'development',
  forwardErrorsToLogs: true
})

datadogRum.init({
  applicationId: process.env.NEXT_PUBLIC_DATADOG_APP_ID as string,
  clientToken: process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN as string,
  site: 'us5.datadoghq.com',
  service: 'mq-portfolio',
  env: process.env.NEXT_PUBLIC_ENV || 'development',
  version: '1.0.0',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 20,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: 'allow'
})

datadogRum.startSessionReplayRecording()

export const DatadogInit = () => null
