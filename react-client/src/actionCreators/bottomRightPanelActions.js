import Shape2d_Point from "../classes/shapeClasses/Shape2d_Point";
import type {bottomRightPanelStateType} from "../reducers/bottomRightPanelReducer";
import Shape2d_Rectangle from "../classes/shapeClasses/Shape2d_Rectangle";
import EnginePartStateModel from "../classes/StateModelClasses/EnginePartStateModel";
import numberIdGenerator from "../classes/NumberIdGenerator";
import {ENGINE_PART_IDS} from "../utilities/CONSTANTS_STRING";

/* ************************** Requesting actions ************************** */
/* This kind of actions do not send new data directly to reducer            */
/* They check on new data to decide whether to call updating actions or not */
/* ************************************************************************ */

export const bottomRightPanelAction_requestToUpdateBottomRightPanelContentLayoutData = () =>
{
    return (dispatch, getState) =>
    {
        let bottomRightPanelState: bottomRightPanelStateType = getState().bottomRightPanelState;
        let basePanelUnitLength: number = getState().basePanelState.basePanelShapeModel.getUnitLengthSmall();
        let bottomRightPanelShapeModel: Shape2d_Rectangle = bottomRightPanelState.bottomRightPanelShapeModel;
        let bottomRightPanelPadding: number = bottomRightPanelState.panelPadding;

        let bottomRightPanelBorderWidth: number = bottomRightPanelShapeModel.getWidth() - 2 * bottomRightPanelPadding;
        let bottomRightPanelBorderHeight: number = bottomRightPanelShapeModel.getHeight() - 2 * bottomRightPanelPadding;
        let bottomRightPanelBorderSize: number = basePanelUnitLength * 0.5;
        let bottomRightPanelBorderRadius: number = basePanelUnitLength * 3;

        let enginePartsGapDistance: number = 30 * bottomRightPanelShapeModel.getUnitLengthLarge();
        let numberOfEngineParts: number = ENGINE_PART_IDS.length;
        if (getState().bottomRightPanelState.enginePartStateModels.length === 0) // Initialize engine part state models if none exist
        {
            let enginePartStateModels: Array<EnginePartStateModel> = [];
            let engineDistance: number = -100 * basePanelUnitLength;
            let engineRotation: number = 45;
            ENGINE_PART_IDS.forEach((id: string, index: number) =>
            {
                let zPosition: number = (index - (numberOfEngineParts - 1) / 2) * enginePartsGapDistance;
                enginePartStateModels.push(new EnginePartStateModel(numberIdGenerator.generateId(), id, zPosition));
            });

            dispatch(bottomRightPanelAction_updateEngineDistance(engineDistance));
            dispatch(bottomRightPanelAction_updateEngineRotation(engineRotation));
            dispatch(bottomRightPanelAction_setEnginePartStateModels(enginePartStateModels));
        }
        else
        {
            ENGINE_PART_IDS.forEach((modelStringId: string, index: number) =>
            {
                let zPosition: number = (index - (numberOfEngineParts - 1) / 2) * enginePartsGapDistance;
                dispatch(bottomRightPanelAction_updateEnginePartStateModelZPosition(modelStringId, zPosition));
            });
        }

        dispatch(bottomRightPanelAction_updateBottomRightPanelContentLayoutData(bottomRightPanelBorderWidth, bottomRightPanelBorderHeight, bottomRightPanelBorderSize, bottomRightPanelBorderRadius));
    }
};

export const bottomRightPanelAction_requestToUpdateEngineDistanceAndRotation = (distance: number, rotation: number) =>
{
    return (dispatch, getState) =>
    {
        let bottomRightPanelState = getState().bottomRightPanelState;

        if (typeof distance === "number" && distance !== bottomRightPanelState.engineDistance)
        {
            dispatch(bottomRightPanelAction_updateEngineDistance(distance));
        }

        if (typeof rotation === "number" && rotation !== bottomRightPanelState.engineRotation)
        {
            dispatch(bottomRightPanelAction_updateEngineRotation(rotation));
        }
    }
};

/* **************************** Updating actions ***************************** */
/* This kind of actions send new data to reducer directly and contain no logic */
/* *************************************************************************** */

export const BOTTOM_RIGHT_PANEL_ACTION_TYPE = Object.freeze({
    BOTTOM_RIGHT_PANEL_ACTION_UPDATE_BOTTOM_RIGHT_PANEL_SIZE: "BOTTOM_RIGHT_PANEL_ACTION_UPDATE_BOTTOM_RIGHT_PANEL_SIZE",
    BOTTOM_RIGHT_PANEL_ACTION_UPDATE_BOTTOM_RIGHT_PANEL_POSITION: "BOTTOM_RIGHT_PANEL_ACTION_UPDATE_BOTTOM_RIGHT_PANEL_POSITION",
    BOTTOM_RIGHT_PANEL_ACTION_SET_BOTTOM_RIGHT_PANEL_FOCUS_ON: "BOTTOM_RIGHT_PANEL_ACTION_SET_BOTTOM_RIGHT_PANEL_FOCUS_ON",
    BOTTOM_RIGHT_PANEL_ACTION_UPDATE_BOTTOM_RIGHT_PANEL_CONTENT_LAYOUT_DATA: "BOTTOM_RIGHT_PANEL_ACTION_UPDATE_BOTTOM_RIGHT_PANEL_CONTENT_LAYOUT_DATA",
    BOTTOM_RIGHT_PANEL_ACTION_SET_ENGINE_PART_STATE_MODELS: "BOTTOM_RIGHT_PANEL_ACTION_SET_ENGINE_PART_STATE_MODELS",
    BOTTOM_RIGHT_PANEL_ACTION_UPDATE_ENGINE_DISTANCE: "BOTTOM_RIGHT_PANEL_ACTION_UPDATE_ENGINE_DISTANCE",
    BOTTOM_RIGHT_PANEL_ACTION_UPDATE_ENGINE_ROTATION: "BOTTOM_RIGHT_PANEL_ACTION_UPDATE_ENGINE_ROTATION",
    BOTTOM_RIGHT_PANEL_ACTION_UPDATE_ENGINE_PART_STATE_MODEL_Z_POSITION: "BOTTOM_RIGHT_PANEL_ACTION_UPDATE_ENGINE_PART_STATE_MODEL_Z_POSITION",
});

export const bottomRightPanelAction_updateBottomRightPanelSize = (newBottomRightPanelWidth: number, newBottomRightPanelHeight: number) =>
{
    return {
        type: BOTTOM_RIGHT_PANEL_ACTION_TYPE.BOTTOM_RIGHT_PANEL_ACTION_UPDATE_BOTTOM_RIGHT_PANEL_SIZE,
        newBottomRightPanelWidth: newBottomRightPanelWidth,
        newBottomRightPanelHeight: newBottomRightPanelHeight
    };
};

export const bottomRightPanelAction_updateBottomRightPanelPosition = (newPosition: Shape2d_Point) =>
{
    return {
        type: BOTTOM_RIGHT_PANEL_ACTION_TYPE.BOTTOM_RIGHT_PANEL_ACTION_UPDATE_BOTTOM_RIGHT_PANEL_POSITION,
        newPosition: newPosition
    };
};

export const bottomRightPanelAction_setBottomRightPanelFocusOn = (focusOn: boolean) =>
{
    return {
        type: BOTTOM_RIGHT_PANEL_ACTION_TYPE.BOTTOM_RIGHT_PANEL_ACTION_SET_BOTTOM_RIGHT_PANEL_FOCUS_ON,
        focusOn: focusOn
    };
};

const bottomRightPanelAction_updateBottomRightPanelContentLayoutData = (bottomRightPanelBorderWidth: number, bottomRightPanelBorderHeight: number, bottomRightPanelBorderSize: number, bottomRightPanelBorderRadius: number) =>
{
    return {
        type: BOTTOM_RIGHT_PANEL_ACTION_TYPE.BOTTOM_RIGHT_PANEL_ACTION_UPDATE_BOTTOM_RIGHT_PANEL_CONTENT_LAYOUT_DATA,
        bottomRightPanelBorderWidth: bottomRightPanelBorderWidth,
        bottomRightPanelBorderHeight: bottomRightPanelBorderHeight,
        bottomRightPanelBorderSize: bottomRightPanelBorderSize,
        bottomRightPanelBorderRadius: bottomRightPanelBorderRadius
    }
};

const bottomRightPanelAction_setEnginePartStateModels = (enginePartStateModels: Array<EnginePartStateModel>) =>
{
    return {
        type: BOTTOM_RIGHT_PANEL_ACTION_TYPE.BOTTOM_RIGHT_PANEL_ACTION_SET_ENGINE_PART_STATE_MODELS,
        enginePartStateModels: enginePartStateModels,
    }
};

const bottomRightPanelAction_updateEngineDistance = (distance: number) =>
{
    return {
        type: BOTTOM_RIGHT_PANEL_ACTION_TYPE.BOTTOM_RIGHT_PANEL_ACTION_UPDATE_ENGINE_DISTANCE,
        engineDistance: distance,
    }
};

const bottomRightPanelAction_updateEngineRotation = (rotation: number) =>
{
    return {
        type: BOTTOM_RIGHT_PANEL_ACTION_TYPE.BOTTOM_RIGHT_PANEL_ACTION_UPDATE_ENGINE_ROTATION,
        engineRotation: rotation,
    }
};

const bottomRightPanelAction_updateEnginePartStateModelZPosition = (stateModelId: number | string, zPosition: number) =>
{
    return {
        type: BOTTOM_RIGHT_PANEL_ACTION_TYPE.BOTTOM_RIGHT_PANEL_ACTION_UPDATE_ENGINE_PART_STATE_MODEL_Z_POSITION,
        stateModelId: stateModelId,
        zPosition: zPosition,
    }
};