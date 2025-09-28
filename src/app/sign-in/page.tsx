import dynamic from "next/dynamic"

const LoginModal = dynamic(() => import("@/components/LoginModal"), { ssr: false })


const LoginPage = () => {
  return (
     <>
      {/* LOGIN MODAL */}
      <LoginModal />
    </>
  )
}

export default LoginPage