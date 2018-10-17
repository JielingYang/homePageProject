export default class StyleObject
{
    constructor()
    {
        this.style = {};
    }

    getStyle(): Object
    {
        return this.style;
    }

    setBasics(position: string, width: number, height: number, left: number, top: number): StyleObject
    {
        this.style = {
            position: position,
            width: width,
            height: height,
            left: left,
            top: top
        };
        return this;
    }

    setBackgroundColor(backgroundColor: string): StyleObject
    {
        this.style.backgroundColor = backgroundColor;
        return this;
    }

    setPerspective(perspective: number, perspectiveOrigin: string): StyleObject
    {
        this.style.perspective = perspective;
        if (perspectiveOrigin !== undefined)
        {
            this.style.perspectiveOrigin = perspectiveOrigin;
        }
        return this;
    }

    setTransformStyle(transformStyle: string)
    {
        this.style.transformStyle = transformStyle;
        return this;
    }

    setBackfaceVisibility(visibility: string)
    {
        this.style.backfaceVisibility = visibility;
        return this;
    }

    addTranslation(translateX: string | number, translateY: string | number, translateZ: string | number)
    {
        let translation: string = " translateX(" + translateX + ")" + " translateY(" + translateY + ")" + " translateZ(" + translateZ + ")";
        if (this.style.transform !== undefined)
        {
            this.style.transform = this.style.transform + translation;
        }
        else
        {
            this.style.transform = translation;
        }
        return this;
    }

    addRotation(rotateX: string | number, rotateY: string | number, rotateZ: string | number)
    {
        let rotation: string = " rotateX(" + rotateX + "deg)" + " rotateY(" + rotateY + "deg)" + " rotateZ(" + rotateZ + "deg)";
        if (this.style.transform !== undefined)
        {
            this.style.transform = this.style.transform + rotation;
        }
        else
        {
            this.style.transform = rotation;
        }
        return this;
    }

    addBlur(blurValue: number)
    {
        let blur = " blur(" + blurValue + "px)";
        if (this.style.filter !== undefined)
        {
            this.style.filter = this.style.filter + blur;
        }
        else
        {
            this.style.filter = blur;
        }
        return this;
    }
}