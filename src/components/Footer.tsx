import { socialLinks } from '@/data/socialLinks'
import FooterItem from './FooterItem'

const Footer = () => {
  return (
    <footer>
      <nav>
        <ul className="relative bottom-0 flex w-full items-center justify-center gap-8 bg-background pb-4 pt-12">
          {socialLinks.map((link) => (
            <FooterItem
              key={link.name}
              href={link.href}
              icon={link.icon}
              changeTextColor={link.changeTextColor}
              name={link.name}
            />
          ))}
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
