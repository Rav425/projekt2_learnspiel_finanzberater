import React from 'react'
const defaultRemainingTime = {
    seconds: '00',
    minutes: '00'
}
export default function Countdown() {
    const [remainingTime, setRemainingTime] = React.useState(defaultRemainingTime)
  return (
    <div>Countdown</div>
  )
}
