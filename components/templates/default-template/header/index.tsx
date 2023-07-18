
import { cx } from '@datalitiks/datalitiks-ui/css';
import { styled } from '@datalitiks/datalitiks-ui/jsx';
import { type DefaultTemplateHeaderProps, defaultTemplateHeaderRecipe } from './header.recipe';

export const DefaultTemplateHeader = ({
    className,
    children,
    ...props
}: DefaultTemplateHeaderProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return (
        <styled.header
            {...props}
            className={cx(defaultTemplateHeaderRecipe({}), className)}>
            {children}
        </styled.header>
    );
};
