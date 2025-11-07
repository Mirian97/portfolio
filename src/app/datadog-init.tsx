'use client'
import { datadogRum } from '@datadog/browser-rum'

datadogRum.init({
  applicationId: process.env.NEXT_PUBLIC_DATADOG_APP_ID as string,
  clientToken: process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN as string,
  site: 'us5.datadoghq.com',
  service: 'mq-portfolio',
  env: 'production',
  version: '1.0.0',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 20,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: 'allow'
})

export const DatadogInit = () => null
