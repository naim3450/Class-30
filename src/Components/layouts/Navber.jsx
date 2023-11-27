import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/logo.png'
import Menu from '../Menu'
import Button from '../Button'


const Navber = () => {
  return (
    <nav className="bg-nav">
        <Container>
            <Flex>
                <div>
                    <Image dg="mr-[220px]" src={logo}/>
                </div>

                <div>
                    <Menu/>
                </div>
                <div>
                  <Button dg="border border-btnBorder rounded-[10px] px-[20px] py-[11px] mr-[10px] bg-btnBorder hover:bg-nav" href="#" text="Login"/>
                  <Button dg="border border-btnBorder rounded-[10px] px-[15px] py-[11px] bg-btnBorder hover:bg-nav" href="#" text="Sign up"/>
                </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navber