'use client'
import Typewriter from 'typewriter-effect'

interface TypingEffectProps {
  textToBeTyped: string[] | string
}

const TypingEffect = ({ textToBeTyped }: TypingEffectProps) => (
  <Typewriter
    options={{
      strings: textToBeTyped,
      autoStart: true,
      loop: true,
      skipAddStyles: true,
      wrapperClassName: 'typewriter'
    }}
  />
)

export default TypingEffect
