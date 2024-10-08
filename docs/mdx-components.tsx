import type { MDXComponents } from 'mdx/types'
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion'
import { Callout } from 'fumadocs-ui/components/callout'
import { Tab, Tabs } from 'fumadocs-ui/components/tabs'
import { TypeTable } from 'fumadocs-ui/components/type-table'
import defaultComponents from 'fumadocs-ui/mdx'
import {
  CodeBlock,
  type CodeBlockProps,
  Pre,
} from 'fumadocs-ui/components/codeblock'
import type { ReactNode } from 'react'
import { Popup, PopupContent, PopupTrigger } from 'fumadocs-ui/twoslash/popup'
import { cn } from '@openlite/ui/tailwind'

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Accordion as AccordionUi,
  Alert,
  AlertDescription,
  AlertTitle,
  AspectRatio,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  Dropdown,
  DropdownCheckboxItem,
  DropdownContent,
  DropdownGroup,
  DropdownItem,
  DropdownLabel,
  DropdownPortal,
  DropdownRadioGroup,
  DropdownRadioItem,
  DropdownSeparator,
  DropdownShorcut,
  DropdownSub,
  DropdownSubContent,
  DropdownSubTrigger,
  DropdownTrigger,
  Input,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Separator,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@openlite/ui'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    Button,
    AspectRatio,
    Popup,
    PopupContent,
    PopupTrigger,
    pre: ({ title, className, icon, allowCopy, ...props }: CodeBlockProps) => (
      <CodeBlock title={title} icon={icon} allowCopy={allowCopy}>
        <Pre className={cn('max-h-[400px]', className)} {...props} />
      </CodeBlock>
    ),
    Tabs,
    AccordionUi,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
    Alert,
    Avatar,
    AvatarImage,
    AvatarFallback,
    AlertDescription,
    AlertTitle,
    Tab,
    Badge,
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
    BreadcrumbEllipsis,
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription,
    CardFooter,
    Checkbox,
    Dialog,
    DialogOverlay,
    DialogPortal,
    DialogClose,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
    DialogHeader,
    DialogContent,
    DialogFooter,
    Dropdown,
    DropdownTrigger,
    DropdownGroup,
    DropdownPortal,
    DropdownSub,
    DropdownSubTrigger,
    DropdownSubContent,
    DropdownItem,
    DropdownContent,
    DropdownCheckboxItem,
    DropdownRadioItem,
    DropdownSeparator,
    DropdownLabel,
    DropdownRadioGroup,
    DropdownShorcut,
    Input,
    Label,
    Progress,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectLabel,
    SelectGroup,
    Separator,
    Popover,
    PopoverTrigger,
    PopoverContent,
    TooltipProvider,
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    Callout,
    TypeTable,
    Accordion,
    Accordions,
    InstallTabs: ({
      items,
      children,
    }: {
      items: string[]
      children: ReactNode
    }) => (
      <Tabs items={items} id="package-manager">
        { children }
      </Tabs>
    ),
    blockquote: props => <Callout>{ props.children }</Callout>,
    ...components,

  }
}
