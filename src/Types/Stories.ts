export interface StoryAyats{
    ayatId: number;
    sequence: number;
}

export type StoryType = {
    title: string;
    description?: string;
    createdUser: string;
    totalAyats: number;
}

export type storyRequestType = {
    title: string;
    description?: string;
    ayats: StoryAyats[];
}

export type getAllStoriesResponse = {
    success: boolean;
    message: string;
    list: StoryType[]
}