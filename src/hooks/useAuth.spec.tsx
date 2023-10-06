import { renderHook } from "@testing-library/react-hooks";
import { useAuth } from "./useAuth";

describe("useAuth", () => {
  it("should return default values", () => {
    const { result } = renderHook(() => useAuth());
    console.log(result.current);
  });
});
