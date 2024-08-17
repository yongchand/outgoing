import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Logo } from '@/components/Logo'



export default function about() {

    return (
        <div>
        <Header />
        <div className="bg-customPurple">
        <Container className="pb-12 pt-12 text-center lg:pt-20 bg-customPurple">
        <div className="w-full text-black">
            <div className="mx-auto px-3 sm:px-5 lg:px-6 py-16">
                <div className="prose mx-auto max-w-5xl rounded-sm bg-white py-12 px-4 shadow-md sm:px-16 space-y-4">
                <div className="flex items-center justify-center mt-2">
                    <div className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex items-center">
                        <Logo />
                    </div>
                    </div>
                    <div className="text-3xl"> What is Outgoing? </div>
                    <p> Being digital nomads ourselves, our team understands how difficult it is to get visas processed when going to other countries. Some common confusions are:</p>
                    <ul>
                        <li>What documents are “good enough” to pass through this country’s work visa standards?</li>
                        <li>Which documents need to be translated?</li>
                        <li>Which documents need to be apostilled? (What even is an apostille?)</li>
                        <li>How likely is my chance of getting rejected for the working visa in this country?</li>
                        <li>Why is everything written in a language I will never understand?</li>
                        <li>Do I need a lawyer/accountant/translator for the visa application process?</li>
                        <li>Can I bring my family along with me?</li>
                    </ul>
                    <p>Outgoing is a product that gives you the necessary documentation and information to work in another country of your choice, so that you don’t have to waste your time and money with all the confusions listed above.</p>
                    <p><em>Our product does not guarantee 100% acceptance in the visa application process. Make sure to do your own research as well.</em></p>
                </div>
            </div>
        </div>
        </Container>
      </div>
      <Footer />
      </div>
    )
}