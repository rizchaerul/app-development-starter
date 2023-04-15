import { Ionicons } from "@expo/vector-icons";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { FC, Fragment, useRef, useState } from "react";
import { Dimensions, View } from "react-native";
import {
    Button,
    Divider,
    Portal,
    Text,
    TouchableRipple,
} from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const AllPostScreen: FC = () => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const insets = useSafeAreaInsets();

    const [sheetHeight, setSheetHeight] = useState(100);

    return (
        <Fragment>
            <View className="p-6">
                <Button
                    mode="contained"
                    onPress={() => bottomSheetRef.current?.snapToIndex(0)}
                >
                    Open Bottom Sheet
                </Button>
            </View>

            <Portal>
                <BottomSheet
                    ref={bottomSheetRef}
                    containerStyle={{ marginBottom: 24 }}
                    topInset={insets.top}
                    snapPoints={[`${sheetHeight + 4}%`]}
                    index={-1}
                    enablePanDownToClose
                    backdropComponent={(props) => (
                        <BottomSheetBackdrop
                            {...props}
                            disappearsOnIndex={-1}
                            pressBehavior="close"
                        />
                    )}
                >
                    <View
                        onLayout={(e) => {
                            const height = e.nativeEvent.layout.height;
                            const percentage =
                                (height / Dimensions.get("window").height) *
                                100;

                            if (percentage > 100) {
                                setSheetHeight(100);
                            }

                            if (percentage != 0) {
                                setSheetHeight(percentage);
                            }
                        }}
                    >
                        <Text className="text-lg font-bold text-center mb-2">
                            username
                        </Text>

                        <Divider />

                        <TouchableRipple className="p-4" onPress={() => {}}>
                            <View className="flex-row items-center justify-between">
                                <Text>Close friend</Text>
                                <Ionicons
                                    name="ios-star"
                                    color="green"
                                    size={24}
                                />
                            </View>
                        </TouchableRipple>

                        <TouchableRipple className="p-4" onPress={() => {}}>
                            <View className="flex-row items-center justify-between">
                                <Text>Add to favorites</Text>
                                <Ionicons name="ios-star-outline" size={24} />
                            </View>
                        </TouchableRipple>

                        <TouchableRipple className="p-4" onPress={() => {}}>
                            <View className="flex-row items-center justify-between">
                                <Text>Unfollow</Text>
                            </View>
                        </TouchableRipple>
                    </View>
                </BottomSheet>
            </Portal>
        </Fragment>
    );
};
