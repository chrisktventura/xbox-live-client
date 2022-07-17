import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBookDead, faDragon, faDungeon, faGhost, faHatCowboy, faHatWizard, faRing, faScroll, faChessRook, faHeart, faShieldHalved, faSkullCrossbones, faPuzzlePiece, faGamepad, faLeaf, faCircleRadiation, faBasketball, faTrophy, faCompass, faBicycle, faBomb, faCannabis, faCarSide, faCube, faBacterium } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as S from './style';

const BgDefault = () => {
    const iconArray: Array<any> = Array.apply(null, Array(Math.floor(window.innerHeight / 64))).map(Number.call, Number);
    const tempIcon: Array<any> = [faBookDead, faDragon, faDungeon, faGhost, faHatCowboy, faHatWizard, faRing, faScroll, faChessRook, faHeart, faShieldHalved, faSkullCrossbones, faPuzzlePiece, faGamepad, faLeaf, faCircleRadiation, faBasketball, faTrophy, faCompass, faBicycle, faBomb, faCannabis, faCarSide, faCube, faBacterium];
    const randomIcon = () => {
        var min = Math.ceil(0);
        var max = Math.floor(tempIcon.length - 1);
        var lastIcon: any = "null";
        const resultArray: Array<any> = [];
        iconArray.forEach((item, index) => {
            var temp = tempIcon[Math.floor(Math.random() * (max - min + 1)) + min]
            if (lastIcon != temp) {
                var blah =
                        <S.iconBgHover>
                            <S.IconBg>
                                <FontAwesomeIcon icon={temp as IconProp} />
                            </S.IconBg>
                        </S.iconBgHover>
                resultArray.push(blah)
                lastIcon = temp;
            }
        })
        return resultArray

    }
    const tempTemp: Array<any> = randomIcon();

    return (
        <S.BgDefaultContent>
                    <S.BgDefaultRow>
            
            {tempTemp.map((item, index) => {
                return item
            })}
                    </S.BgDefaultRow>


        </S.BgDefaultContent>
    )
}

export default BgDefault;