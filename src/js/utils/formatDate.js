export default function formatDate(date) {
  const months = ["января", "февраля", "марта", "апреля",
    "мая", "июня", "июля", "августа", "сентября", "октября",
    "ноября", "декабря"];
  const newDate = new Date(date);

  return newDate.getDate() + ' ' + months[newDate.getMonth()] + ', ' + newDate.getFullYear();
}
