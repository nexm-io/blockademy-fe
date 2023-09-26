import Footer from "@/components/Footer"
import GiftHeader from "@/components/GiftHeader"
import NoSignal from "@/components/NoSignal"
import FormAccount from "@/views/Accounts/FormAcount"

const AccountPage = () => {
    return (
        <div>
            <GiftHeader/>
            <FormAccount />
            <NoSignal/>
            <Footer/>
        </div>
    )
}

export default AccountPage