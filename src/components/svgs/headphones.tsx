import { Props } from "./props";

export function Headphones(props: Props) {
  return (
    <svg
      width={props.size}
      height={props.size}
      fill="currentColor"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5"></path>
    </svg>
  )
}