
export function formatDate(timestamp, lang, format) {
  if (!timestamp) return "Unset"

  const dateObj = new Date(timestamp)
  
  const language = {
    'ar': 'ar-EG',
    'en': 'en-us',
  }[lang] || ''
  
  const weekday = dateObj.toLocaleString(language, { 
    weekday: 'long', 
  })
  const date = dateObj.toLocaleString(language, { 
    year: 'numeric', 
    month: 'numeric', 
    day: 'numeric', 
  })
  const time = dateObj.toLocaleString(language, {hour: 'numeric', minute: 'numeric'})

  if (format === 'full') return `${weekday} ${date} ${time}`
  if (format === 'day-date') return `${weekday} ${date}`
  if (format === 'date') return date
  if (format === 'time') return time

  return {weekday, date, time}
}