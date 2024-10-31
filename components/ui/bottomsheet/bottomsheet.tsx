import React, { useMemo, forwardRef } from "react";
import {
  BottomSheetView,
  BottomSheetBackdrop,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";

function renderBackdrop(props: any) {
  return (
    <BottomSheetBackdrop
      {...props}
      appearsOnIndex={0}
      disappearsOnIndex={-1}
      opacity={0.4}
      pressBehavior="close"
    />
  );
}

const CustomBottomSheet = forwardRef((props: any, ref: any) => {
  const snapPoints = useMemo(() => ["25%", "90%"], []);

  return (
    <BottomSheetModal
      ref={ref}
      backdropComponent={renderBackdrop}
      snapPoints={snapPoints}
      index={1}
    >
      <BottomSheetView>
        {props.children}
      </BottomSheetView>
    </BottomSheetModal>
  );
});

export default CustomBottomSheet;
