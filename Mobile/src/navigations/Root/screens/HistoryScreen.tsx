import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { Portal } from "@gorhom/portal";
import { FC, Fragment, useRef } from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { generateShadow } from "../../../functions/generateShadow";
import { RootStackScreenProps } from "../RootStackNavigator";

export const HistoryScreen: FC<RootStackScreenProps<"History">> = () => {
    const bottomSheetRef = useRef<BottomSheet>(null);

    return (
        <Fragment>
            <View className="bg-white" style={generateShadow(1)}>
                <Button
                    mode="outlined"
                    className="mx-4 mb-4 w-24"
                    uppercase={false}
                    onPress={() => bottomSheetRef.current?.expand()}
                >
                    Filter
                </Button>
            </View>

            <Portal>
                <BottomSheet
                    ref={bottomSheetRef}
                    snapPoints={["80%"]}
                    index={-1}
                    backdropComponent={(props) => (
                        <BottomSheetBackdrop
                            {...props}
                            disappearsOnIndex={-1}
                            pressBehavior="close"
                        />
                    )}
                >
                    <View className="flex-1 px-4 py-4">
                        <Text className="text-xl font-bold">
                            Choose transaction date
                        </Text>

                        <Button
                            mode="contained"
                            className="mt-auto"
                            contentStyle={{ height: 48 }}
                            uppercase={false}
                        >
                            Set filter
                        </Button>
                    </View>
                </BottomSheet>
            </Portal>
        </Fragment>
    );
};
