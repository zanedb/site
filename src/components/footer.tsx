import Link from 'next/link'
import Icon from 'supercons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="pt-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-0.5">
          <Button href="https://github.com/zanedb">
            <Icon glyph="github-fill" size={36} />
          </Button>
          <Button href="https://twitter.com/zanedb_">
            <svg
              width="36"
              height="36"
              viewBox="0 0 32 32"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.986 15.968C27.986 26.968 26.986 27.968 15.986 27.968C4.98602 27.968 3.98602 26.968 3.98602 15.968C3.98602 4.96799 4.98602 3.96799 15.986 3.96799C26.986 3.96799 27.986 4.96799 27.986 15.968ZM22.361 9.50699H20.1557L16.5217 13.661L13.3797 9.50699H8.82904L14.2664 16.617L9.11304 22.507H11.3197L15.297 17.9623L18.773 22.507H23.211L17.543 15.0137L22.361 9.50699ZM20.6037 21.187H19.3817L11.4044 10.7577H12.7157L20.6037 21.187Z"
              ></path>
            </svg>
          </Button>
          <Button href="mailto:hey@zanedb.com">
            <Icon glyph="email" size={36} />
          </Button>
        </div>
        <p className="text-muted font-medium hoverEffect">© {year}</p>
      </div>
    </footer>
  )
}

const Button = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => (
  <Link href={href} className="transition-transform hover:scale-110">
    {children}
  </Link>
)
