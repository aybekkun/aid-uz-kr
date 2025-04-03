import { cn } from "@/shared/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

const MenuBar = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
	({ className, ...props }, ref) => (
		<ul
			ref={ref}
			data-menubar={"menu"}
			className={cn("flex w-full min-w-0 flex-col gap-1", className)}
			{...props}
		/>
	)
)
MenuBar.displayName = "MenuBar"

const MenuBarItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(
	({ className, ...props }, ref) => (
		<li
			ref={ref}
			data-menubar={"menu-item"}
			className={cn("group/menu-item relative", className)}
			{...props}
		/>
	)
)
MenuBarItem.displayName = "MenuBarItem"

const menuBarButtonVariants = cva(
	"peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-base outline-none ring-ring transition-[width,height,padding] hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 active:bg-accent active:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-menubar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-accent data-[active=true]:font-medium data-[active=true]:text-accent-foreground data-[state=open]:hover:bg-accent data-[state=open]:hover:text-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
	{
		variants: {
			variant: {
				default: "hover:bg-accent hover:text-accent-foreground",
				outline:
					"bg-background shadow-[0_0_0_1px_hsl(var(--border))] hover:bg-accent hover:text-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--accent))]"
			},
			size: {
				default: "min-h-10 text-base",
				sm: "min-h-7 text-sm",
				lg: "min-h-12 text-lg group-data-[collapsible=icon]:!p-0"
			}
		},
		defaultVariants: {
			variant: "default",
			size: "default"
		}
	}
)

const MenuBarButton = React.forwardRef<
	HTMLButtonElement,
	React.ComponentProps<"button"> & {
		asChild?: boolean
		isActive?: boolean
	} & VariantProps<typeof menuBarButtonVariants>
>(
	(
		{
			asChild = false,
			isActive = false,
			variant = "default",
			size = "default",
			className,
			...props
		},
		ref
	) => {
		const Comp = asChild ? Slot : "button"

		return (
			<Comp
				ref={ref}
				data-menubar={"menu-button"}
				data-size={size}
				data-active={isActive}
				className={cn(menuBarButtonVariants({ variant, size }), className)}
				{...props}
			/>
		)
	}
)
MenuBarButton.displayName = "MenuBarButton"

const MenuBarSub = React.forwardRef<
	HTMLUListElement,
	React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
	<ul
		ref={ref}
		data-menubar={"menu-sub"}
		className={cn(
			"mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-border px-2.5 py-0.5",
			"group-data-[collapsible=icon]:hidden",
			className
		)}
		{...props}
	/>
))
MenuBarSub.displayName = "MenuBarSub"

const MenuBarSubItem = React.forwardRef<
	HTMLLIElement,
	React.ComponentProps<"li">
>(({ ...props }, ref) => <li ref={ref} {...props} />)
MenuBarSubItem.displayName = "MenuBarSubItem"

const MenuBarSubButton = React.forwardRef<
	HTMLAnchorElement,
	React.ComponentProps<"a"> & {
		asChild?: boolean
		size?: "sm" | "md"
		isActive?: boolean
	}
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
	const Comp = asChild ? Slot : "a"

	return (
		<Comp
			ref={ref}
			data-menubar={"menu-sub-button"}
			data-size={size}
			data-active={isActive}
			className={cn(
				"flex min-h-10 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-foreground outline-none ring-ring hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 active:bg-accent active:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-accent-foreground",
				"data-[active=true]:bg-accent data-[active=true]:text-accent-foreground",
				size === "sm" && "text-sm",
				size === "md" && "text-base",
				"group-data-[collapsible=icon]:hidden",
				className
			)}
			{...props}
		/>
	)
})
MenuBarSubButton.displayName = "MenuBarSubButton"

export {
	MenuBar,
	MenuBarItem,
	MenuBarButton,
	MenuBarSub,
	MenuBarSubItem,
	MenuBarSubButton
}
