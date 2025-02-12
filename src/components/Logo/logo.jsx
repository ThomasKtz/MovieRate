import s from "./logo.module.css";

export function Logo({ image, title, subtitle }) {
    return (
        <>
            <div>
                <img className="img" src={image} alt="" />
                <span className={s.title}>{title}</span>
            </div>
            <span className={s.subtitle}>{subtitle}</span>
        </>
    );
}
