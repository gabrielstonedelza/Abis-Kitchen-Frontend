export const load = async ({ fetch }) => {
    const res = await fetch('https://abiskitchen.xyz/all-food');
    const data = res.json();

    return {
        data
    };
};