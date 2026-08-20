import type { ReactNode } from 'react'
import { legalJurisdiction, links, supportEmail } from './site'

/*
 * Privacy Policy and Terms of Use.
 *
 * The wording is carried over from dialed-backend (src/services/legal.ts, on
 * branch fix/app-store-blockers), which wrote it from what the code actually
 * does. Substance is unchanged; only the markup and styling were adapted to
 * this site. Two documents now exist for the same text — if the backend's copy
 * changes, change this one with it.
 *
 * This is a faithful description of the data flows, NOT legal advice. Have it
 * reviewed before submission.
 */

export type LegalDoc = {
  title: string
  intro: string
  sections: { heading: string; body: ReactNode }[]
}

const SupportLink = () => <a href={`mailto:${supportEmail}`}>{supportEmail}</a>

export const privacyDoc: LegalDoc = {
  title: 'Privacy Policy',
  intro:
    'Dialed is a coffee brewing app. Most of it runs entirely on your iPhone. This page explains exactly what leaves your device, when, and why.',
  sections: [
    {
      heading: 'Using Dialed without an account',
      body: (
        <>
          <p>
            You can use Dialed without creating an account, and most people can use it that way
            forever. Recipes, brew logs, beans, gear, maintenance reminders, activity statistics and
            favourites are stored locally on your iPhone.
          </p>
          <p>
            <strong>Without an account, Dialed sends no data to our servers at all.</strong> There
            are no analytics, no advertising, no tracking, and no third-party SDKs in the app. We do
            not know you exist.
          </p>
        </>
      ),
    },
    {
      heading: 'When you create an account',
      body: (
        <>
          <p>
            An account is only required to buy Dialed+ and to use the features it unlocks. Accounts
            are created with Sign in with Apple. From that we receive and store:
          </p>
          <ul>
            <li>The stable, app-specific user identifier Apple issues for you.</li>
            <li>
              Your email address, if you choose to share it. If you use Apple's Hide My Email, we
              only ever see the private relay address.
            </li>
            <li>Your name, only if you share it on the first sign-in.</li>
            <li>
              A random identifier we generate to link your App Store purchases to your account.
            </li>
          </ul>
          <p>
            We never receive your Apple Account password, and we do not ask for a password of our
            own.
          </p>
        </>
      ),
    },
    {
      heading: 'What Dialed+ syncs',
      body: (
        <>
          <p>
            With an active Dialed+ subscription, the content you create is backed up to our servers
            so it survives a lost phone and appears on your other devices: recipes, brew logs,
            beans, gear, maintenance tasks, and the photos you attach to them.
          </p>
          <p>
            Records are stored in a MongoDB Atlas database. Photos are stored as files in Cloudflare
            R2 and are retrieved by your app through short-lived, signed links. Both are accessible
            only to your account.
          </p>
          <p>
            Deleting a record in the app deletes it on the server. A marker is kept for up to 90
            days so your other devices learn about the deletion, then it is removed permanently.
          </p>
        </>
      ),
    },
    {
      heading: 'The AI features',
      body: (
        <>
          <p>
            Dialed+ includes features that generate text: recipe generation, reading a bag label
            from a photo, finding a roaster's website, gear guides, dial-in suggestions and machine
            shot profiles. To produce a result, the relevant information is sent from our servers to
            Anthropic's API:
          </p>
          <ul>
            <li>
              Recipe, dial-in and profile requests send the brewing details involved — bean name,
              roaster, origin, process, roast level and date, your method, and the gear you have
              entered.
            </li>
            <li>Label scanning sends the photo of the coffee bag you took.</li>
            <li>Roaster lookup sends the roaster's name and, if known, the origin.</li>
          </ul>
          <p>
            Your name, email, account identifier and photos of anything other than a coffee bag are
            never sent. Anthropic processes this data to return a result under its API terms and
            does not use it to train models. We keep a copy of each generated result linked to your
            account so repeating a request does not bill you twice.
          </p>
        </>
      ),
    },
    {
      heading: 'Purchases',
      body: (
        <>
          <p>
            Dialed+ is sold through the App Store. Apple handles the payment; we never see your
            card, billing address or Apple Account details.
          </p>
          <p>
            Apple sends us a signed record of the transaction so we know whether your subscription
            is active. We store the transaction identifier, the product purchased, its status and
            its renewal or expiry date.
          </p>
        </>
      ),
    },
    {
      heading: 'Recipe share links',
      body: (
        <p>
          If you publish a recipe as a share link, the details on that recipe card become readable
          by anyone who has the link. Share pages are marked so search engines do not index them,
          but they are not otherwise protected — treat a share link as public. Share pages contain
          only the recipe: no name, email or account details. Deleting your account removes every
          share page you published; to take a single one down sooner, contact us.
        </p>
      ),
    },
    {
      heading: 'Notifications',
      body: (
        <p>
          Maintenance reminders are scheduled and delivered entirely on your device. They are not
          sent from a server and we do not know when one fires.
        </p>
      ),
    },
    {
      heading: 'What we never do',
      body: (
        <p>
          We do not sell your data. We do not share it with advertisers or data brokers. We do not
          track you across other apps or websites, and Dialed asks for no tracking permission. We do
          not build profiles about you for any purpose other than running the features described
          above.
        </p>
      ),
    },
    {
      heading: 'Deleting your data',
      body: (
        <>
          <p>
            You can delete your account from Settings inside the app. Doing so permanently removes
            your account record, your synced recipes, brews, beans, gear and maintenance tasks, your
            stored photos, your saved AI results, your published share pages and your subscription
            records from our servers. We also ask Apple to revoke the Sign in with Apple token that
            connected you to Dialed.
          </p>
          <p>
            Anything stored locally on your iPhone stays on your iPhone until you delete the app.
            Deleting your account does not cancel your App Store subscription — cancel that in the
            App Store.
          </p>
        </>
      ),
    },
    {
      heading: 'Children',
      body: (
        <p>
          Dialed is not directed to children under 13, and we do not knowingly collect information
          from them.
        </p>
      ),
    },
    {
      heading: 'Changes',
      body: (
        <p>
          If this policy changes in a way that affects what we collect or how we use it, we will
          update this page and the date at the top.
        </p>
      ),
    },
    {
      heading: 'Contact',
      body: (
        <p>
          Questions about privacy or your data: <SupportLink />.
        </p>
      ),
    },
  ],
}

export const termsDoc: LegalDoc = {
  title: 'Terms of Use',
  intro:
    'These terms cover your use of the Dialed iPhone app and the Dialed+ subscription. Using the app means you accept them.',
  sections: [
    {
      heading: 'Your licence',
      body: (
        <>
          <p>
            We grant you a personal, non-transferable licence to use Dialed on Apple devices you own
            or control, as permitted by the App Store Terms of Service. You may not resell the app,
            rent it out, reverse-engineer it, or use it to build a competing service.
          </p>
          <p>
            Apple's{' '}
            <a
              href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
              rel="noreferrer"
            >
              Licensed Application End User License Agreement
            </a>{' '}
            also applies to your use of Dialed. Where it conflicts with these terms, it takes
            precedence.
          </p>
        </>
      ),
    },
    {
      heading: 'Free and Dialed+',
      body: (
        <>
          <p>
            Recipes, brew logging, beans, gear, maintenance reminders, activity statistics and
            sharing are free, and work without an account.
          </p>
          <p>
            Dialed+ is an optional subscription that unlocks the AI features, photo attachments, and
            cloud backup and sync. An account is required to buy it.
          </p>
        </>
      ),
    },
    {
      heading: 'Subscriptions, billing and cancellation',
      body: (
        <>
          <p>
            Dialed+ is offered as a monthly or annual auto-renewing subscription, sold and billed
            through your App Store account at the price shown in the app at the time of purchase.
          </p>
          <ul>
            <li>
              Your subscription renews automatically at the end of each period unless you turn off
              auto-renew at least 24 hours before it ends.
            </li>
            <li>
              Your account is charged for renewal within 24 hours before the current period ends.
            </li>
            <li>
              Any free trial period offered applies to new subscribers only. If you have used a
              trial for Dialed+ before, you will be charged when you subscribe.
            </li>
            <li>Unused time in a free trial is forfeited when you buy a subscription.</li>
            <li>
              Manage or cancel your subscription in the App Store's subscription settings. Deleting
              the app does not cancel it.
            </li>
          </ul>
          <p>
            Refunds are handled by Apple under the App Store Terms of Service; we cannot issue them
            directly.
          </p>
        </>
      ),
    },
    {
      heading: 'AI-generated suggestions',
      body: (
        <p>
          Dialed's AI features produce brewing suggestions — starting points for you to taste and
          adjust, not guaranteed results. Generated recipes, dial-in advice, label readings, roaster
          links, gear guides and machine profiles can be wrong or incomplete. Check anything that
          matters before relying on it, particularly a machine profile you are about to run on your
          equipment. You are responsible for how you use your own gear.
        </p>
      ),
    },
    {
      heading: 'Your content',
      body: (
        <>
          <p>
            Your recipes, brew logs, notes and photos are yours. You keep all rights to them. You
            grant us only the permission needed to store, back up and display that content back to
            you, and — for a recipe you choose to publish as a share link — to display that recipe
            publicly at its link until you unpublish it.
          </p>
          <p>
            Do not publish content you do not have the right to share, or content that is unlawful
            or infringing.
          </p>
        </>
      ),
    },
    {
      heading: 'Acceptable use',
      body: (
        <p>
          Do not attempt to break, overload or gain unauthorised access to the service, circumvent
          the subscription, or use the AI features to generate content unrelated to coffee at a
          volume that degrades the service for others. We apply rate limits and a monthly quota to
          the AI features and may adjust them.
        </p>
      ),
    },
    {
      heading: 'Availability and changes',
      body: (
        <p>
          We aim to keep the service running but do not promise uninterrupted availability. Features
          may change, and we may discontinue a feature. Because Dialed keeps a full copy of your
          library on your device, ending your subscription or a change on our side does not take
          your recipes and brew history away from you.
        </p>
      ),
    },
    {
      heading: 'Ending the agreement',
      body: (
        <p>
          You can stop using Dialed at any time and delete your account from within the app. We may
          suspend or end access if these terms are breached in a way that harms the service or other
          people.
        </p>
      ),
    },
    {
      heading: 'No warranty and limits on liability',
      body: (
        <p>
          Dialed is provided "as is", without warranties of any kind to the fullest extent the law
          allows. To the extent permitted by law, our total liability arising out of your use of
          Dialed is limited to the amount you paid for it in the twelve months before the claim.
          Nothing here limits liability that cannot lawfully be limited.
        </p>
      ),
    },
    {
      heading: 'Governing law',
      body: (
        <>
          {legalJurisdiction && (
            <p>
              These terms are governed by the laws of {legalJurisdiction}, without regard to its
              conflict-of-law rules.
            </p>
          )}
          <p>
            Apple is not a party to these terms and has no responsibility for Dialed. Apple is,
            however, a third-party beneficiary of them and may enforce them against you.
          </p>
        </>
      ),
    },
    {
      heading: 'Contact',
      body: (
        <p>
          Questions about these terms: <SupportLink />.
        </p>
      ),
    },
  ],
}

export const legalDocs = {
  privacy: { doc: privacyDoc, href: links.privacy },
  terms: { doc: termsDoc, href: links.terms },
}
