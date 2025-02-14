import React from 'react';
import classes from '../MainPage.module.sass';
import myPhoto from '../../../assets/images/img.jpg';
import ZoomableImage from "../../../components/other/zoomableImage/ZoomableImage";
import TooltipedImage from "../../../components/other/tooltopedImage/TooltipedImage";

const iconsSet = [
    {icons: 'js,ts', tooltip: 'JavaScript, TypeScript'},
    {icons: 'redux', tooltip: 'Redux, Redux Toolkit'},
    {icons: 'html,css,sass', tooltip: 'HTML, CSS, Sass'},
    {icons: 'bootstrap,materialui,styledcomponents', tooltip: 'Bootstrap, Material UI, Styled Components', divider:true},
    {icons: 'react', tooltip: 'React'},
    {icons: 'git,github', tooltip: 'Git, GitHub'},
    {icons: 'figma', tooltip: 'Figma'},
];

const Landing = ({text}) => {
    const RenderIcons = () => (
        <div
            className={classes.skills__images}
        >
            {iconsSet.map((icon, index) => (
                <React.Fragment key={index}>
                    <TooltipedImage
                        title={icon.tooltip}
                        image={`https://skillicons.dev/icons?i=${icon.icons}`}
                        alt={icon.tooltip}
                    />
                    {icon.divider && <hr/>}
                </React.Fragment>
            ))}
        </div>
    );

    return (
        <section
            className={`${classes.landing} container`}
        >
            <div>
                <div
                    className={classes.landing__text}
                >
                    <h3>{text.h3}</h3>
                    <h1>
                        {text.h1[0]} <b>
                            {text.h1[1]}
                        </b>
                    </h1>
                    <h2>{text.h2}</h2>
                    <p>
                        {text.p[0]}
                        <br/>
                        {text.p[1]}
                    </p>
                    <figure
                        className={classes.skills}
                    >
                        <figcaption
                            className={classes.skills__title}
                        >
                            {text.skillsTitle}:
                        </figcaption>
                        <RenderIcons/>
                    </figure>
                </div>
                <ZoomableImage
                    className={classes.landing__image}
                    src={myPhoto}
                    alt="My photo"
                />
            </div>
        </section>
    );
};

export default Landing;
