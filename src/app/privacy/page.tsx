import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container max-w-screen-lg px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <Card className="bg-card shadow-xl rounded-xl p-6 md:p-10 border-border/50">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl font-headline text-primary text-center">Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none text-foreground/80 font-body">
            <p>Your privacy is important to us. It is Luxe Shortlet's policy to respect your privacy regarding any information we may collect from you across our website, [Your Website URL], and other sites we own and operate.</p>

            <h2 className="font-headline text-foreground">1. Information We Collect</h2>
            <p>Log data: When you visit our website, our servers may automatically log the standard data provided by your web browser. This data is considered "non-identifying information," as it does not personally identify you on its own. It may include your computer's Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, and other details.</p>
            <p>Personal information: We may ask for personal information, such as your name and email address, when you contact us or use certain features of our website. This data is considered "identifying information," as it can personally identify you.</p>

            <h2 className="font-headline text-foreground">2. How We Use Information</h2>
            <p>We may use a combination of identifying and non-identifying information to understand who our visitors are, how they use our services, and how we may improve their experience of our website in future. We do not publicly disclose specifics of this information, but may share aggregated and anonymised versions of this information, for example, in website usage trend reports.</p>
            <p>We may use your personal details to contact you with updates about our website and services, along with promotional content that we believe may be of interest to you.</p>

            <h2 className="font-headline text-foreground">3. Data Processing and Storage</h2>
            <p>The personal information we collect is stored and processed where we or our partners, affiliates, and third-party providers maintain facilities. We only transfer data within jurisdictions subject to data protection laws that reflect our commitment to protecting the privacy of our users.</p>
            <p>We only retain personal information for as long as necessary to provide a service, or to improve our services in future. While we retain this data, we will protect it within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification.</p>

            <h2 className="font-headline text-foreground">4. Cookies</h2>
            <p>We use "cookies" to collect information about you and your activity across our site. A cookie is a small piece of data that our website stores on your computer, and accesses each time you visit, so we can understand how you use our site. This helps us serve you content based on preferences you have specified.</p>

            <h2 className="font-headline text-foreground">5. Third-Party Access to Information</h2>
            <p>We may use third-party services for: analytics tracking, advertising and promotion, content marketing, email marketing. These services may access our data solely for the purpose of performing specific tasks on our behalf. We do not share any personally identifying information with them without your explicit consent. We do not give them permission to disclose or use any of our data for any other purpose.</p>

            <h2 className="font-headline text-foreground">6. Children's Privacy</h2>
            <p>This website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will delete it from our servers.</p>

            <h2 className="font-headline text-foreground">7. Changes to our Privacy Policy</h2>
            <p>At our discretion, we may change our privacy policy to reflect current acceptable practices. We will take reasonable steps to let users know about changes via our website. Your continued use of this site after any changes to this policy will be regarded as acceptance of our practices around privacy and personal information.</p>

            <p className="mt-8"><em>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</em></p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
