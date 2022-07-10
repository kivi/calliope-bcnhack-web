import { classNames } from "app/utils/helper"

export default function Spinner(className) {
  return (
    <div
      className={classNames(
        className,
        "spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
      )}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  )
}
