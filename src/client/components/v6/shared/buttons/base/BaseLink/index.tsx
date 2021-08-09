import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { forwardRef } from 'react';
import { linkStyles } from 'client/components/v6/shared/buttons/base/styles/link';

type BaseAnchorProps = Omit<React.ComponentProps<'a'>, 'href'> & {
  as?: LinkProps['as'];
  href: LinkProps['href'];
  locale?: LinkProps['locale'];
  children?: React.ReactNode;
};

export const BaseLink = forwardRef<HTMLAnchorElement, BaseAnchorProps>(
  (props, ref) => {
    const router = useRouter();
    const {
      as,
      href,
      locale = router.locale,
      children,
      ...buttonProps
    } = props;

    return (
      <Link href={href} as={as} locale={locale} passHref>
        <a css={linkStyles} {...buttonProps} ref={ref}>
          {children}
        </a>
      </Link>
    );
  }
);
