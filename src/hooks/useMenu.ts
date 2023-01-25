import { RefObject, useState } from 'react'
import useOutsideClick from './useOutsideClick'

const useMenu = <T extends HTMLElement = HTMLElement>(ref: RefObject<T>): [boolean, () => void] => {
	const [isShow, setIsShow] = useState<boolean>(false)
	const toggleShow = () => setIsShow((prev) => !prev)

	useOutsideClick(ref, () => setIsShow(false))

	return [isShow, toggleShow]
}

export default useMenu
