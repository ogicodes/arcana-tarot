import React from 'react';
import { View, Text } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

export default function CustomBottomSheet({bottomSheetRef}: {bottomSheetRef: BottomSheet}) {


  // renders
  return (
    <View className='flex-1 p-6 bg-gray-500'>
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
      >
        <BottomSheetView className='flex-1 items-center'>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};
