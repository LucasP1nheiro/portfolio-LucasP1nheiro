export default function getMyAge() {
  const birthdate = '2002-04-17'

  const birthdateObj = new Date(birthdate)
  const currentDate = new Date()

  const age = currentDate.getFullYear() - birthdateObj.getFullYear()

  const birthMonth = birthdateObj.getMonth()
  const currentMonth = currentDate.getMonth()
  const birthDay = birthdateObj.getDate()
  const currentDay = currentDate.getDate()

  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDay < birthDay)
  ) {
    return age - 1
  } else {
    return age
  }
}
