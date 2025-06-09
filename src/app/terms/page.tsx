import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container max-w-screen-lg px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <Card className="bg-card shadow-xl rounded-xl p-6 md:p-10 border-border/50">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl font-headline text-primary text-center">Terms of Service</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none text-foreground/80 font-body">
            <p>Welcome to Luxe Shortlet! These terms and conditions outline the rules and regulations for the use of Luxe Shortlet's Website, located at [Your Website URL].</p>

            <h2 className="font-headline text-foreground">1. Acceptance of Terms</h2>
            <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Luxe Shortlet if you do not agree to take all of the terms and conditions stated on this page.</p>

            <h2 className="font-headline text-foreground">2. Cookies</h2>
            <p>We employ the use of cookies. By accessing Luxe Shortlet, you agreed to use cookies in agreement with the Luxe Shortlet's Privacy Policy.</p>
            <p>Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>

            <h2 className="font-headline text-foreground">3. License</h2>
            <p>Unless otherwise stated, Luxe Shortlet and/or its licensors own the intellectual property rights for all material on Luxe Shortlet. All intellectual property rights are reserved. You may access this from Luxe Shortlet for your own personal use subjected to restrictions set in these terms and conditions.</p>
            <p>You must not:</p>
            <ul>
              <li>Republish material from Luxe Shortlet</li>
              <li>Sell, rent or sub-license material from Luxe Shortlet</li>
              <li>Reproduce, duplicate or copy material from Luxe Shortlet</li>
              <li>Redistribute content from Luxe Shortlet</li>
            </ul>

            <h2 className="font-headline text-foreground">4. User Comments</h2>
            <p>This Agreement shall begin on the date hereof.</p>
            <p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Luxe Shortlet does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Luxe Shortlet,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Luxe Shortlet shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p>
            <p>Luxe Shortlet reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.</p>
            
            <h2 className="font-headline text-foreground">5. Disclaimer</h2>
            <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
            <ul>
              <li>limit or exclude our or your liability for death or personal injury;</li>
              <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
              <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
              <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
            </ul>
            <p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>
            <p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>

            <p className="mt-8"><em>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</em></p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
