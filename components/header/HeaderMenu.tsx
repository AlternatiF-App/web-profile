interface HeaderMenuProps{
    menu: string;
}

const HeaderMenu = ({ menu }:HeaderMenuProps) => {
  return (
        <li className="hover:text-primary cursor-pointer transition-all duration-300 ease-in-out inline-block menu-title">
            <span className="block py-1">
                {menu}
            </span>
        </li>
  )
}

export default HeaderMenu
