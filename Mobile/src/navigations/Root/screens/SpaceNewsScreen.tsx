import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import * as WebBrowser from "expo-web-browser";
import { FC, Fragment } from "react";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import { Divider, Text } from "react-native-paper";
import { generateShadow } from "../../../functions/generateShadow";
import { RootStackScreenProps } from "../RootStackNavigator";

const limit = 10;

interface NewsListItem {
    id: number;
    title: string;
    published_at: string;
    summary: string;
    news_site: string;
    url: string;
    image_url: string;
}

export const SpaceNewsScreen: FC<RootStackScreenProps<"SpaceNews">> = () => {
    const { data, fetchNextPage, hasNextPage, refetch, isFetching } =
        useInfiniteQuery<NewsListItem[]>({
            queryKey: ["SpaceNews"],
            queryFn: async ({ pageParam = 1 }) => {
                const offset = (pageParam - 1) * limit;

                const result = await axios.get(
                    "https://api.spaceflightnewsapi.net/v4/articles",
                    {
                        params: {
                            limit: limit,
                            offset: offset,
                        },
                    }
                );

                return result.data.results;
            },
            getNextPageParam: (lastPage, pages) => {
                if (lastPage.length >= limit) {
                    const nextPage = pages.length + 1;
                    return nextPage;
                }

                return undefined;
            },
        });

    return (
        <Fragment>
            <FlatList
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingTop: 16,
                }}
                data={data?.pages.flat()}
                keyExtractor={(item) => item.id.toString()}
                onRefresh={refetch}
                refreshing={isFetching}
                showsVerticalScrollIndicator={false}
                onEndReached={() => {
                    if (hasNextPage) {
                        fetchNextPage();
                    }
                }}
                renderItem={({ item }) => (
                    <Fragment>
                        <TouchableOpacity
                            className="mb-4 bg-white p-4 rounded-md flex-row"
                            style={generateShadow(2)}
                            onPress={() =>
                                WebBrowser.openBrowserAsync(item.url)
                            }
                        >
                            <View className="basis-2/3 pr-4">
                                <Text className="font-bold text-lg mb-1">
                                    {item.title}
                                </Text>
                                <Text className="mb-4 text-gray-600">
                                    {new Date(
                                        item.published_at
                                    ).toLocaleDateString()}
                                </Text>

                                <Text
                                    className="text-gray-600"
                                    numberOfLines={3}
                                >
                                    {item.summary}
                                </Text>

                                <Divider className="my-4" />

                                <Text className="text-gray-600">
                                    News Site :{" "}
                                    <Text className="font-bold">
                                        {item.news_site}
                                    </Text>
                                </Text>
                            </View>

                            <View className="basis-1/3">
                                <Image
                                    className="rounded-md absolute top-0 bottom-0 left-0 right-0"
                                    source={{
                                        uri: item.image_url,
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                    </Fragment>
                )}
            />
        </Fragment>
    );
};
