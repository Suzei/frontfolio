import { HeaderContainer, HeaderHome } from "./styles";

interface HeaderProps {
    variant: 'home' | 'blog'
}

export function Header({ variant }: HeaderProps) {
    return (
        <HeaderContainer>
            {variant === 'home' ? (
                <>
                    <HeaderHome>

                    </HeaderHome>
                </>

            ) : (
                <h2>Blog</h2>
            )}
        </HeaderContainer>
    )
}