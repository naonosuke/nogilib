import * as React from 'react';
import { Typography } from 'client/components/atoms/Typography';
import {
  TextSwitchLink,
  TextSwitchLinkProps,
} from 'client/components/atoms/buttons/TextSwitchLink';

type TextSwitchLinkGroupProps = Pick<
  TextSwitchLinkProps,
  'variant' | 'textOn'
> & {
  links: (Pick<TextSwitchLinkProps, 'isSwitchedOn' | 'to'> & {
    text: string;
  })[];
} & React.HTMLAttributes<HTMLDivElement>;

export const TextSwitchLinkGroup: React.FC<TextSwitchLinkGroupProps> = props => {
  const { variant, textOn = 'onBackground', links, ...restProps } = props;

  return (
    <div {...restProps}>
      {links.map((link, index) =>
        index === links.length - 1 ? (
          <TextSwitchLink
            key={link.text}
            variant={variant}
            textOn={textOn}
            isSwitchedOn={link.isSwitchedOn}
            to={link.to}
          >
            {link.text}
          </TextSwitchLink>
        ) : (
          <>
            <TextSwitchLink
              key={link.text}
              variant={variant}
              textOn={textOn}
              isSwitchedOn={link.isSwitchedOn}
              to={link.to}
            >
              {link.text}
            </TextSwitchLink>
            <Typography
              variant={variant}
              element="span"
              textColor={{
                on: textOn,
                variant: 'variant1',
              }}
            >
              {' '}
              /{' '}
            </Typography>
          </>
        )
      )}
    </div>
  );
};
