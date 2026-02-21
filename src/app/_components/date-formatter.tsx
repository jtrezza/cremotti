import { parseISO, format } from "date-fns";

type Props = {
  dateString: string | Date;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = dateString instanceof Date ? dateString : parseISO(dateString);
  const dateTime = dateString instanceof Date ? dateString.toISOString() : dateString;

  return <time dateTime={dateTime}>{format(date, "LLLL d, yyyy")}</time>;
};

export default DateFormatter;
