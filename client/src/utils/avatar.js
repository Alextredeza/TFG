import md5 from 'md5';

const getGravatarURL = (email) => {
    const address = String(email).trim().toLowerCase();
    const hash = md5(address);
    return `https://www.gravatar.com/avatar/${hash}`;
}

export default getGravatarURL;