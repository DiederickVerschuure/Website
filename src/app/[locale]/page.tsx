import { getT } from '~locales/server';

const Page = async () => {
    const t = await getT();

    return (
        <div className="m-8">
            <h1 className="text-2xl text-neutral-50">{t('home.description')}</h1>
        </div>
    );
};

export default Page;
