import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBookDead, faDragon, faDungeon, faGhost, faHatCowboy, faHatWizard, faRing, faScroll, faChessRook, faHeart, faShieldHalved, faSkullCrossbones, faPuzzlePiece, faGamepad, faLeaf, faCircleRadiation, faBasketball, faTrophy, faCompass, faBicycle, faBomb, faCannabis, faCarSide, faCube, faBacterium } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as S from './style';

const BgDefault = () => {
    const iconArray: Array<any> = Array.apply(null, Array(Math.floor(window.innerHeight / 64))).map(Number.call, Number);

    return (
        <S.BgDefaultContent>
            {iconArray.map((item, index) => {
                return <S.BgDefaultRow>
                    <S.IconBg>
                        <FontAwesomeIcon icon={faDragon as IconProp} />
                    </S.IconBg>
                    <S.IconBg>
                        <FontAwesomeIcon icon={faBookDead as IconProp} />
                    </S.IconBg>
                    <S.IconBg>
                        <FontAwesomeIcon icon={faDungeon as IconProp} />
                    </S.IconBg>
                    <S.IconBg>
                        <FontAwesomeIcon icon={faGhost as IconProp} />
                    </S.IconBg>
                    <S.IconBg>
                        <FontAwesomeIcon icon={faHatCowboy as IconProp} />
                    </S.IconBg>
                    <S.IconBg>
                        <FontAwesomeIcon icon={faHatWizard as IconProp} />
                    </S.IconBg>
                    <S.IconBg>
                        <FontAwesomeIcon icon={faRing as IconProp} />
                    </S.IconBg>
                    <S.IconBg>
                        <FontAwesomeIcon icon={faScroll as IconProp} />
                    </S.IconBg>
                    <S.IconBg>
                        <FontAwesomeIcon icon={faChessRook as IconProp} />
                    </S.IconBg>
                    <S.IconBg>
                        <FontAwesomeIcon icon={faHeart as IconProp} />
                    </S.IconBg>
                    <S.IconBg>
                        <FontAwesomeIcon icon={faShieldHalved as IconProp} />
                    </S.IconBg>
                    <S.IconBg>
                        <FontAwesomeIcon icon={faSkullCrossbones as IconProp} />
                    </S.IconBg>
                    <S.IconBg>
                        <FontAwesomeIcon icon={faPuzzlePiece as IconProp} />
                    </S.IconBg>
                    <S.IconBg>
                        <FontAwesomeIcon icon={faGamepad as IconProp} />
                    </S.IconBg>
                    <S.IconBg>
                        <FontAwesomeIcon icon={faLeaf as IconProp} />
                    </S.IconBg>
                    <S.IconBg>
                        <FontAwesomeIcon icon={faCircleRadiation as IconProp} />
                    </S.IconBg>
                    <S.IconBg>
                        <FontAwesomeIcon icon={faBasketball as IconProp} />
                    </S.IconBg>
                    <S.IconBg>
                        <FontAwesomeIcon icon={faCannabis as IconProp} />
                    </S.IconBg>
                    <S.IconBg>
                        <FontAwesomeIcon icon={faTrophy as IconProp} />
                    </S.IconBg>
                    <S.IconBg>
                        <FontAwesomeIcon icon={faCompass as IconProp} />
                    </S.IconBg>
                    <S.IconBg>
                        <FontAwesomeIcon icon={faBicycle as IconProp} />
                    </S.IconBg>
                    <S.IconBg>
                        <FontAwesomeIcon icon={faBomb as IconProp} />
                    </S.IconBg>
                    <S.IconBg>
                        <FontAwesomeIcon icon={faCarSide as IconProp} />
                    </S.IconBg>
                    <S.IconBg>
                        <FontAwesomeIcon icon={faCube as IconProp} />
                    </S.IconBg>
                    <S.IconBg>
                        <FontAwesomeIcon icon={faBacterium as IconProp} />
                    </S.IconBg>
                </S.BgDefaultRow>
            })}
        </S.BgDefaultContent>
    )
}

export default BgDefault;