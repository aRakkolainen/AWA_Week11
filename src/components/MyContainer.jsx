import {useTranslation} from 'react-i18next';

const MyContainer = function() {
    const {t, i18n} = useTranslation(); 
    return <>
        <div>
            <h1> {t('Frontpage')}</h1>
        </div>
    </>
} 
export default MyContainer;