export const copyToClipboard = (value: string) => {
  navigator.clipboard.writeText(value)
  const snackback = document.getElementById('copied-snackbar')
  snackback.style.opacity = '1'
  setTimeout(() => {
    snackback.style.opacity = '0'
  }, 1500)
}
